import { randomBytes } from 'tweetnacl';
import { encodeBase64, decodeBase64 } from 'tweetnacl-util';

// Generate a keypair
const generateKeypair = () => {
  const privateKey = randomBytes(32); // Generate a private key (32 bytes)
  const publicKey = encodeBase64(Sodium.crypto_sign_publickey(Sodium.crypto_sign_keypair())); // Derive public key

  return {
    privateKey: encodeBase64(privateKey), // Convert private key to base64
    publicKey,
  };
};

const keypair = generateKeypair();
console.log('Generated Keypair:', keypair);
