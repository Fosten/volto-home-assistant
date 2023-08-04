import PlantWatererView from '@Fosten/volto-home-assistant/components/Blocks/PlantWaterer/View';
import PlantWatererEdit from '@Fosten/volto-home-assistant/components/Blocks/PlantWaterer/Edit';
import icon from '@plone/volto/icons/list-bullet.svg';

const customBlocks = {
  plantwaterer: {
    id: 'plantwaterer',
    title: 'Plant Waterer',
    edit: PlantWatererEdit,
    view: PlantWatererView,
    icon: icon,
    group: 'text',
    restricted: false,
    mostUsed: false,
    sidebarTab: 1,
    security: {
      addPermission: [],
      view: [],
    },
  },
};
export default customBlocks;
