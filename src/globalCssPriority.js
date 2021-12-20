import * as React from 'react';
import { StyledEngineProvider } from '@mui/material/styles';

export default function GlobalCssPriority() {
  return (
  <StyledEngineProvider injectFirst>

  </StyledEngineProvider>
);
}