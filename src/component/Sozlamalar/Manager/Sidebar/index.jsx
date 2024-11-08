import { Body, Container, Link, Sidebar, Wrapper } from './style';
import { manager } from '../../../../utils/sozlamalar';
import { Outlet } from 'react-router-dom';

export const ManagerSidebar = () => {
  return (
    <Container>
      <Wrapper>
        <Sidebar>
          {
            manager.map((item) => {
              const { icon: Icon } = item;
              return (
                <Link
                  key={item.path}
                  to={`/sozlamalar/manager/${item.path}`}
                  state={{ parent: ["Sozlamalar", "Manager"], child: item.title }}
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

export default ManagerSidebar;