import {
  Card,
  CardBody,
  CardProps,
  CardTitle,
  SkeletonDiv,
  SkeletonSpan,
} from '@mqs/react-server-components';

export interface UserCardLoadingProps extends Omit<CardProps, 'side' | 'children'> {

}

export default function UserCardLoading(props: UserCardLoadingProps) {
  return (
    <Card
      variantImage='side'
      {...props} // eslint-disable-line react/jsx-props-no-spreading
    >
      <figure>
        <SkeletonDiv
          cx={[
            'h-[150px]',
            'w-[150px]',
          ]}
        />
      </figure>
      <CardBody>
        <CardTitle>
          <SkeletonSpan
            cx={[
              'rounded-md',
              'h-[1rem]',
              'w-[150px]',
            ]}
          />
        </CardTitle>
        <ul>
          <li>
            <SkeletonSpan
              cx={[
                'rounded-md',
                'h-[1rem]',
                'w-[150px]',
              ]}
            />
          </li>
        </ul>
      </CardBody>
    </Card>
  );
}
