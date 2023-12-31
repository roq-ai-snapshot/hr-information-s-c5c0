import { useSession } from '@roq/nextjs';
import { Text, Box } from '@chakra-ui/react';
import { useRoqPlatformTenant } from 'lib/roq';

interface AppLogoProps {
  isMobile?: boolean;
}
export const AppLogo = (props: AppLogoProps) => {
  const { isMobile } = props;

  const ownerRoles = ['business-owner', 'hr-manager', 'payroll-administrator', 'employee', 'accountant'];
  const appName = `HR Information System`;

  const { session } = useSession();
  const { data } = useRoqPlatformTenant(
    {
      id: session?.user?.tenantId,
    },
    {
      disabled: !session?.user?.tenantId,
    },
  );
  const isOwner = ownerRoles.some((role) => session?.user?.roles?.includes(role));
  const tenantName = data?.tenant?.name;
  return (
    <Box maxW={{ lg: 'lg', base: '200px' }}>
      <Text isTruncated fontSize="lg" fontWeight="bold">
        {isOwner ? tenantName : appName}
      </Text>
    </Box>
  );
};
