import { IAuthorization } from 'shared/api/lib/types';

interface FormRegistration extends Omit<IAuthorization, 'avatarUrl'> {}
interface FormLogin extends Omit<FormRegistration, 'fullName'> {}

export type { FormRegistration, FormLogin };
