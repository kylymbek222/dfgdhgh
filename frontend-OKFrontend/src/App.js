import React from 'react';
import { Route, Switch, /* Redirect*/ } from 'react-router-dom';
import './app.scss';
import AdminPage from './pages/admin';
import AuthPage from './pages/auth';
import StudentsSearchPage from './pages/studentsSearch';
import MenuPage from './pages/userMenu';
import StudentsDataPage from './pages/studentsDataPage';
import DisciplinesPage from './pages/disciplines';
import GroupsPage from './pages/groups';
import ForeignStudentsList from './components/lists/foreignStudentsList';
import StudentsByCoursesAndGroups from './components/lists/studentsByCoursesAndGroups';
import CuratorsList from './components/lists/curators';
import HeaderComponent from './components/header';
import WorkingCurriculum from "./pages/workingCurriculum";
import ReferenceContainer from "./components/references/referenceContainer";
import ProfileCurriculum from "./pages/profileCurriculum";

const App = (props) => {
  return (
    <div /*style={{ position: 'absolute' }}*/>
      <div>
        <HeaderComponent />
      </div>
      <div style={{ margin: '60px 0 0 0' }}>
        <Switch>
          <Route path="/login" component={AuthPage} />
          <Route path="/admin" component={AdminPage} />
          <Route path="/menu" component={MenuPage} />
          <Route path="/disciplines" component={DisciplinesPage} />
           <Route path="/groups" component={GroupsPage} />
          <Route path="/working-curriculum" component={WorkingCurriculum} />
          <Route path="/profile-curriculum" component={ProfileCurriculum} />
          <Route path="/search" component={StudentsSearchPage} />
          <Route
            path="/student/:studentId?"
            render={() => <StudentsDataPage />}
          />
          <Route
            path="/lists/foreign-students"
            render={() => <ForeignStudentsList />}
          />
          <Route path="/lists/curators" render={() => <CuratorsList />} />
          <Route
            path="/lists/students-by-courses"
            render={() => <StudentsByCoursesAndGroups />}
          />
          <Route path="/references" component={ReferenceContainer} />
          {/*{props.isAuth ? (<Route exact path="/" render={() => <Redirect to="/menu"/>}/>)*/}
          {/*    : (<Route exact path="/" render={() => <Redirect to="/login"/>}/>)}*/}
        </Switch>
      </div>
    </div>
  );
};

export default App;
