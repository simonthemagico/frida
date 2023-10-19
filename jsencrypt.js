import { JSEncrypt } from 'jsencrypt';
import forge from 'node-forge';



// Your RSA keys
const privateKey = `-----BEGIN RSA PRIVATE KEY-----
-----END RSA PRIVATE KEY-----`;

const publicKey = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAp1/1z2qKLyfNlHTm2rS8nF6EPS1dpsejIMpzf+NIFdVyeayGjlgu/R0j5B5PNcyVpNMe+3GayGIwWJaHGZWj+c8X7ptER4gZ83vuB7J7AwTKivmHqh2cDFPot8UJFBNJzkFdsj/Jm0h5aSzDFZe7LIZ1iCRG7sPfJqWibYRTDp5/KNL7x83XFWTWIO53ApTvk5J3qiAnGzZHcZex1suo5eNXr46dTNpoUxrUT3/b7CMnY6swjXOLHmPABpPcrHNnWqObXcV6xKNNU+oW0deLZOH75qh5/uSZF9RGPh6th/HQKUYiJ0TfBrDLERHIenMFd2U2y4jKx0YgZxkCm57TVwIDAQAB
-----END PUBLIC KEY-----`;

const text = "0695016192";

// Encryption
const encryptor = new JSEncrypt();
encryptor.setPublicKey(publicKey);

const encrypted = encryptor.encrypt(text);
console.log("Encrypted:", encrypted);
