import {
  Card,
  CardBody,
  CardProps,
  Skeleton,
} from '@mqs/react-server-components';

export interface UserCardLoadingProps extends Omit<CardProps, 'side' | 'children'> {

}

export default function UserCardLoading(props: UserCardLoadingProps) {
  return (
    <Card
      side
      {...props} // eslint-disable-line react/jsx-props-no-spreading
    >
      <figure>
        <Skeleton
          cx={[
            'h-[150px]',
            'w-[150px]',
          ]}
        />
      </figure>
      <CardBody>
        <Skeleton
          cx={[
            'card-title',
            'rounded-md',
            'h-[1rem]',
            'w-[150px]',
          ]}
        />
      </CardBody>
    </Card>
  );
}
