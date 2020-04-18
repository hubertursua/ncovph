import environment from '../environment';
import express from '../express';

express.listen({ port: environment.port }, () => {
  // eslint-disable-next-line no-console
  console.log(`Server ready at http://localhost:${environment.port}`);
});
