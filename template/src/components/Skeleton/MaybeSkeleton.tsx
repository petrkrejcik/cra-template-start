import React from 'react';
import { Skeleton, SkeletonProps } from '@mui/material';

interface Props {
  isLoading: boolean;
  children: any;
}

export const MaybeSkeleton = (props: SkeletonProps & Props) => {
  const { isLoading, ...skeletonProps } = props;
  if (isLoading) {
    return <Skeleton {...skeletonProps}>{props.children}</Skeleton>;
  }
  return props.children || null;
};
