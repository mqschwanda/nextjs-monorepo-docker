import {
  Card,
  CardBody,
  CardProps,
  CardTitle,
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
        <div
          className='w-[150px] h-[150px] animate-pulse bg-neutral-content'
        />
      </figure>
      <CardBody>
        <CardTitle>
          <span
            className='w-[150px] h-6 animate-pulse bg-neutral-content rounded-md'
          />
        </CardTitle>
      </CardBody>
    </Card>
  );
}
