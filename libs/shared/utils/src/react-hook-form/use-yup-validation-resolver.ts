import { useCallback } from 'react';
import * as yup from 'yup';

export const useYupValidationResolver = <T>(
  validationSchema: ReturnType<typeof yup.object>
) =>
  useCallback(
    async (data: T) => {
      try {
        const values = await validationSchema.validate(data, {
          abortEarly: false,
        });

        return {
          values,
          errors: {},
        };
      } catch (errors) {
        if (errors instanceof yup.ValidationError) {
          return {
            values: {},
            errors: errors.inner.reduce(
              (allErrors, currentError) => ({
                ...allErrors,
                [currentError.path ?? '']: {
                  type: currentError.type ?? 'validation',
                  message: currentError.message,
                },
              }),
              {}
            ),
          };
        }
        throw new Error('Error trying to validate form schema');
      }
    },
    [validationSchema]
  );
