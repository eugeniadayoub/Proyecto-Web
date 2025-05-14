// Increase timeout for all tests
jest.setTimeout(30000);
 
// Global error handler for unhandled promise rejections
process.on('unhandledRejection', (error) => {
  console.error('Unhandled promise rejection:', error);
}); 