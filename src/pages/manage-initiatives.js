import Head from 'next/head';
import React, { useState } from 'react';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import Box from '@mui/material/Box';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { TreeView } from '@mui/x-tree-view/TreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';



const Page = () => (
  <>
    <Head>
      <title>
        Companies | Devias Kit
      </title>
    </Head>
    <h1> Manage Initiatives </h1>
    <Box sx={{ minHeight: 180, flexGrow: 1, maxWidth: 300 }}>
      <TreeView
        aria-label="file system navigator"
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
      >
        <TreeItem nodeId="3" label="Enironment">
          <TreeItem nodeId="4" label="File-1" />
        </TreeItem>
        <TreeItem nodeId="5" label="Social">
          <TreeItem nodeId="10" label="File-2" />
          <TreeItem nodeId="6" label="File-3">
            <TreeItem nodeId="8" label="index.js" />
          </TreeItem>
        </TreeItem>
        <TreeItem nodeId="9" label="Governance">
          <TreeItem nodeId="10" label="File-1" />
        </TreeItem>
      </TreeView>
    </Box>
  </>
);

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
