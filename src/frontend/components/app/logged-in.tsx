import React from 'react'

import { CurrentAdmin } from '../../../current-admin.interface'
import { LoggedUser, Box, DropDownItem, Link } from '../design-system'

type Props = {
  session: CurrentAdmin;
  paths: {
    logoutPath: string;
  };
}

const LoggedIn: React.FC<Props> = (props) => {
  const { session, paths } = props
  return (
    <Box flexShrink={0} py="default">
      <LoggedUser
        email={session.email}
        title={session.title}
      >
        <DropDownItem>
          <Link href={paths.logoutPath}>Log out</Link>
        </DropDownItem>
      </LoggedUser>
    </Box>
  )
}

export default LoggedIn
