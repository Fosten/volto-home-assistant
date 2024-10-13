import '@plone/volto/config';
import customBlocks from './Blocks/customBlocks';

const applyConfig = (config) => {
  config.blocks = {
    ...config.blocks,
    blocksConfig: {
      ...config.blocks.blocksConfig,
      ...customBlocks,
    },
  };
  return config;
};

export default applyConfig;
