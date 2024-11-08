import { Container } from './style';
import { Navigate, Route, Routes } from 'react-router-dom';
import sidebar from '../utils/sidebar';
import { Sidebar } from '../component/Sidebar';
import Checkin from '../component/Guruhlar/Groups/Сheckin';
import UmumiySidebar from '../component/Sozlamalar/Umumiy/Sidebar';
import { manager, umumiy } from '../utils/sozlamalar';
import ManagerSidebar from '../component/Sozlamalar/Manager/Sidebar';

export const Root = () => {
  return (
    <Container>
      <Routes>
        <Route element={<Sidebar />}>
          {/* Sozlamalar  Umumiy*/}
          <Route element={<UmumiySidebar />}>
            {umumiy.map((item) => {
              const { element: Element } = item;
              return (
                <Route
                  key={item.id}
                  path={`sozlamalar/umumiy/${item.path}`}
                  element={<Element />}
                />
              );
            })}
          </Route>
          {/* Sozlamalar  Manager*/}
          <Route element={<ManagerSidebar />}>
            {manager.map((item) => {
              const { element: Element } = item;
              return (
                <Route
                  key={item.id}
                  path={`sozlamalar/manager/${item.path}`}
                  element={<Element />}
                />
              );
            })}
          </Route>
          
          {/* MAIN */}
          <Route
            //key={child.id}
            path={"/guruhlar/groups/checkin"}
            element={<Checkin />}
          />;
          {
            sidebar.map((parent) => {
              const ElementParent = parent.element;

              if (parent?.children) {
                return parent.children.map((child) => {
                  const ElementChild = child.element;
                  return (
                    <Route
                      key={child.id}
                      path={child.path}
                      element={<ElementChild />}
                    />
                  );
                });
              } else
                return !parent.hidden && (
                  <Route
                    key={parent.id}
                    path={parent.path}
                    element={<ElementParent />}
                  />
                );
            })
          }
        </Route>
        {
          sidebar.map((parent) => {
            const ElementParent = parent.element;
            return parent.hidden && <Route
              key={parent.id}
              path={parent.path}
              element={<ElementParent />}
            />;
          })
        }
        <Route path='/' element={
          <Navigate to={"/analitika"} />} />
        <Route
          path='/sozlamalar/umumiy'
          element={
            <Navigate
              to={"/sozlamalar/umumiy/check"}
              state={{ path: ["Sozlamalar", "Umumiy", "Check"], child: "Check" }}
            />
          }
        />
        <Route path='*' element={<h1> 404 not found </h1>} />
      </Routes>
    </Container>
  );
};

export default Root;