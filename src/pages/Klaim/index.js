import { Layout, Table, Button, Space } from "antd";
import React from "react";

const { Content } = Layout;

const Klaim = () => {
  const columns = [
    {
      title: "User ID",
      width: 100,
      dataIndex: "userId",
      key: "userId",
      fixed: "left",
    },
    {
      title: "Nama Penerima",
      width: 100,
      dataIndex: "nama",
      key: "nama",
    },
    {
      title: "Telpon Penerima",
      width: 100,
      dataIndex: "phonePenerima",
      key: "phonePenerima",
    },
    {
      title: "Telpon Lainnya",
      width: 100,
      dataIndex: "phoneLainnya",
      key: "phoneLainnya",
    },
    {
      title: "Email",
      width: 100,
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Alamat",
      width: 100,
      dataIndex: "alamat",
      key: "alamat",
    },
    {
      title: "Catatan",
      width: 100,
      dataIndex: "catatan",
      key: "catatan",
    },
    {
      title: "Action",
      key: "operation",
      fixed: "right",
      width: 100,
      render: (text, record) => (
        <Space size="middle">
          <Button type="primary">delivery</Button>
          <Button type="primary" danger>
            rejected
          </Button>
        </Space>
      ),
    },
  ];

  const data = [];
  for (let i = 0; i < 100; i++) {
    data.push({
      key: i,
      userId: `febri${i}`,
      nama: `Edrward ${i}`,
      phonePenerima: `628181897272${i}`,
      phoneLainnya: `628181897272${i}`,
      email: "febriyunus@gmail.com",
      alamat: "jalan pulo mangga gang palem",
      catatan: "Samping Rumah",
    });
  }

  return (
    <Content style={{ margin: "0 16px" }}>
      <h2>Data Klaim</h2>
      <Table
        columns={columns}
        dataSource={data}
        scroll={{ x: 1500, y: 1000 }}
        pagination={false}
      />
    </Content>
  );
};

export default Klaim;
