import { Layout, Menu } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import React from "react";
import { HiOutlineHome } from "react-icons/hi";
import { GrOrganization } from "react-icons/gr";
import { BsPersonPlusus } from "react-icons/bs"
import Sider from "antd/es/layout/Sider";

const Homescreen = () => {
  return (
    <Layout className="container">
      <Header style={{ backgroundColor: "white" }}>Header</Header>
      <Layout>
        <Sider theme="light">
          <Menu
            theme="light"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={[
              {
                key: "1",
                icon: <HiOutlineHome />,
                label: "Home",
                children: [
                    {
                        label:"Add Profile",
                        key:"1-1",
                        icon: <BsPersonPlusus/>,
                    },
                    {
                        label:"Edit Profile",
                        key:"1-2",
                        icon: <BsPersonPlusus/>,
                    }
                ]
              },
              {
                key: "2",
                icon: <GrOrganization />,
                label: "nav 2",
              },
            ]}
          />
        </Sider>
        <Content>Content</Content>
      </Layout>
    </Layout>
  );
};

export default Homescreen;
