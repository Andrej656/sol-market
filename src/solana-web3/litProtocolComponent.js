import { box, openBox } from 'tweetnacl'; // Assuming Lit Protocol uses box encryption

// Encrypt data with the public key
const encryptData = (data, publicKey, privateKey) => {
  const decodedPublicKey = decodeBase64(publicKey);
  const decodedPrivateKey = decodeBase64(privateKey);

  const nonce = randomBytes(24); // Generate a nonce
  const encrypted = box(data, nonce, decodedPublicKey, decodedPrivateKey);

  return {
    nonce: encodeBase64(nonce),
    encryptedData: encodeBase64(encrypted),
  };
};

// Decrypt data with the private key
const decryptData = (encryptedData, nonce, publicKey, privateKey) => {
  const decodedPublicKey = decodeBase64(publicKey);
  const decodedPrivateKey = decodeBase64(privateKey);
  const decodedEncryptedData = decodeBase64(encryptedData);
  const decodedNonce = decodeBase64(nonce);

  const decrypted = openBox(decodedEncryptedData, decodedNonce, decodedPublicKey, decodedPrivateKey);

  return decrypted ? decrypted : 'Decryption failed';
};

// Example usage:
const dataToEncrypt = 'This is a secret message.';
const encrypted = encryptData(dataToEncrypt, keypair.publicKey, keypair.privateKey);
console.log('Encrypted Data:', encrypted);

const decrypted = decryptData(encrypted.encryptedData, encrypted.nonce, keypair.publicKey, keypair.privateKey);
console.log('Decrypted Data:', decrypted);
