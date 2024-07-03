import crypto from 'crypto';

interface EncryptionService {
  encrypt(text: string): string;
  decrypt(encryptedText: string): string;
}

export class AESEncryptionService implements EncryptionService {
  private readonly algorithm: string = 'aes-256-ecb'; // AES encryption with ECB mode
  private readonly key: Buffer;

  constructor() {
    const secretKey = process.env.NEXT_PUBLIC_SECRET_KEY || 'secret-key';
    this.key = crypto.createHash('sha256').update(secretKey).digest(); // Use SHA-256 hash of the secret key
  }

  encrypt(text: string): string {
    const cipher = crypto.createCipheriv(
      this.algorithm,
      this.key,
      Buffer.alloc(0)
    ); // Empty IV for ECB mode
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
  }

  decrypt(encryptedText: string): string {
    const decipher = crypto.createDecipheriv(
      this.algorithm,
      this.key,
      Buffer.alloc(0)
    ); // Empty IV for ECB mode
    let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
  }
}
