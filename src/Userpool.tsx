import { CognitoUserPool } from 'amazon-cognito-identity-js';
const poolData = {
  UserPoolId: 'ap-south-1_pjGmGaOD7',
  ClientId: '34dav3smbul7osaq8q82n7tb06',
};
export default new CognitoUserPool(poolData);