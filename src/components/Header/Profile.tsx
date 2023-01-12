import { Box, Flex, Text, Avatar } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Victor Bruno</Text>
          <Text color="gray.300" fontSize="small">
            victorbrunof@icloud.com
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Victor Bruno"
        src="https://github.com/victorbrunof.png"
      />
    </Flex>
  );
}
