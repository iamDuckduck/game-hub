import { Card, Skeleton, SkeletonText } from "@chakra-ui/react";
import React from "react";

const GameCardSkeleton = () => {
  return (
    <Card width="300px" borderRadius="10px" overflow="hidden">
      <Skeleton height="200px"></Skeleton>
      <Card>
        <SkeletonText></SkeletonText>
      </Card>
    </Card>
  );
};

export default GameCardSkeleton;
