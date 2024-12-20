# Unhandled Promise Rejection in Node.js Express.js App

This repository demonstrates a common error in Node.js Express.js applications: unhandled promise rejections. The application simulates an asynchronous operation (database query) that might fail.  Without proper error handling, this failure causes the server to crash.

The `bug.js` file contains the buggy code. The `bugSolution.js` file provides a corrected version with robust error handling.

## How to Reproduce

1. Clone this repository.
2. Navigate to the repository's directory.
3. Run `npm install express` to install the dependencies.
4. Run `node bug.js` to start the buggy server.
5. Refresh the server several times.  You will eventually see the server crash due to the unhandled exception.
6. Run `node bugSolution.js` to start the corrected server.  The server should handle errors gracefully.