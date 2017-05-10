import React, { Component } from 'react';
import { AppBar, Checkbox, IconButton, Button} from 'react-toolbox';
import {IconMenu, MenuItem, MenuDivider } from 'react-toolbox/lib/menu';
import { Layout, NavDrawer, Panel, Sidebar } from 'react-toolbox';
import Navigation from 'react-toolbox/lib/navigation';
import Input from 'react-toolbox/lib/input';
import RtButton from './button';
import {Link} from 'react-toolbox/lib/link';
import { List, ListItem, ListSubHeader, ListDivider, ListCheckbox } from 'react-toolbox/lib/list';
class Nav extends React.Component{
    render() {
      return (
          <div>
            <NavDrawer active='true'
              pinned='true' permanentAt='xxxl'
               clipped >
               <Navigation type='vertical'>
                   <List selectable ripple>
                       <ListSubHeader caption='Students' /><MenuDivider />
      <MenuItem value='download' icon='get_app' caption='Download' />
      <MenuItem value='help' icon='favorite' caption='Favorite' />
      <MenuItem value='settings' icon='open_in_browser' caption='Open in app' />
     
      <ListSubHeader caption='Finance' /><MenuDivider />
      <MenuItem value='download' icon='get_app' caption='Download' />
      <MenuItem value='help' icon='favorite' caption='Favorite' />
      <MenuItem value='settings' icon='open_in_browser' caption='Open in app' />
      <ListSubHeader caption='Finance' /><MenuDivider />
      <MenuItem value='download' icon='get_app' caption='Download' />
      <MenuItem value='help' icon='favorite' caption='Favorite' />
      <MenuItem value='settings' icon='open_in_browser' caption='Open in app' />
      <ListSubHeader caption='Finance' /><MenuDivider />
      <MenuItem value='download' icon='get_app' caption='Download' />
      <MenuItem value='help' icon='favorite' caption='Favorite' />
      <MenuItem value='settings' icon='open_in_browser' caption='Open in app' />
      </List>
      </Navigation>

          </NavDrawer>
             <Panel>
             <AppBar title="MASTER"  flat>
               <Navigation type='horizontal'>
                     <Link href="#/Inputform" label="Form" icon = 'person' />
                     <Link href="#/Table" label="Database" icon = 'email' />
               </Navigation>
             </AppBar>

              </Panel>
            </div>
          );
      }
  }
export default Nav;
