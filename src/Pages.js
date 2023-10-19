// Load all the pages and how they should be built here.
import LeanManufacturing from './components/Screens/LeanManufacturing';

import Splash from './components/Splash';

export const courses = {
'Learn': [<Splash t1='Overview' t2='Learn with Nexus' />],
'LeanManufacturing':[<Splash t1='Professional Certificate' t2='Lean Manufacturing' />,<LeanManufacturing />],
'Splash':[<Splash t1='Learn With Nexus' t2='Courses'/>,'Hi Again!']};