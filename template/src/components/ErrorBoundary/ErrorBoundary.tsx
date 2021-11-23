import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@mui/material';
import { ErrorBoundary as ErrorBoundaryLib } from 'react-error-boundary';
import { useTranslation } from 'react-i18next';

export const ErrorBoundary = (props: { children: React.ReactNode }) => {
  return <ErrorBoundaryLib FallbackComponent={FallbackComponent}>{props.children}</ErrorBoundaryLib>;
};

const FallbackComponent = () => {
  const { t } = useTranslation();
  return (
    <Dialog open maxWidth="xs" fullWidth>
      <DialogTitle>Uuups</DialogTitle>
      <DialogContent>
        <Typography>{t('errorOccured')}</Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={reload}>{t('reload')}</Button>
      </DialogActions>
    </Dialog>
  );
};

const reload = () => window.location.reload();
