import { Container, IconInfo } from '@mqs/react-server-components';
import { AlertDismissible } from '@mqs/react-client-components';

interface AlertsProps {

}

export default function Alerts(_props: AlertsProps) {
  return (
    <Container
      center
    >
      <AlertDismissible
        cx={[
          'my-4',
          'shadow-lg',
        ]}
        variantBackgroundColor='info'
      >
        <IconInfo
          className='flex-shrink-0 w-6 h-6'
        />
        <span>
          { 'New software update available.' }
        </span>
      </AlertDismissible>
    </Container>
  );
}
