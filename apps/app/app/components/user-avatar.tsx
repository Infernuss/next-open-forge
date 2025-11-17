import { getInitials } from "@repo/auth/utils/username";
import {
  Avatar,
  AvatarFallback,
} from "@repo/design-system/components/ui/avatar";

type UserAvatarProps = {
  username: string;
};

export default function UserAvatar({ username }: UserAvatarProps) {
  const initials = getInitials(username);

  return (
    <Avatar>
      <AvatarFallback>{initials}</AvatarFallback>
    </Avatar>
  );
}
