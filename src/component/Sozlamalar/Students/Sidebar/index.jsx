import { Body, Container, Link, Sidebar, Wrapper } from './style';
import { student } from '../../../../utils/sozlamalar';
import { Outlet } from 'react-router-dom';

export const StudentSidebar = () => {
  return (
    <Container>
      <Wrapper>
        <Sidebar>
          {
            student.map((item) => {
              const { icon: Icon } = item;
              return (
                <Link
                  key={item.path}
                  to={`/sozlamalar/student/${item.path}`}
                  state={{ parent: ["Sozlamalar", "Talaba"], child: item.title }}
                >
                  <Icon className="sub-icon" /> {item.title}
                </Link>
              );
            })
          }
        </Sidebar>
        <Body>
          <Outlet />
        </Body>
      </Wrapper>
    </Container>
  );
};

export default StudentSidebar;