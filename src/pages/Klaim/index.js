import { Button, Layout, notification, Space, Table } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionPrize, findAllPrize } from "../../redux";

const { Content } = Layout;

const Klaim = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.global);
  const [data, setData] = useState([]);

  useEffect(() => {
    const findAll = async () => {
      try {
        const result = await dispatch(findAllPrize());
        setData(result);
      } catch (e) {
        notification["error"]({
          message: "Gagal Login",
          description: e.message,
        });
      }
    };

    findAll();
  }, [dispatch]);

  const onDelivery = async (data) => {
    try {
      const result = await dispatch(
        actionPrize({ id: data.id, status: "delivery" })
      );
      const value = await dispatch(findAllPrize());
      setData(value);
      notification["success"]({
        message: "Success",
        description: result.message,
      });
    } catch (e) {
      notification["error"]({
        message: "Gagal Login",
        description: e.message,
      });
    }
  };

  const onRejected = async (data) => {
    try {
      const result = await dispatch(
        actionPrize({ id: data.id, status: "rejected" })
      );
      const value = await dispatch(findAllPrize());
      setData(value);
      notification["success"]({
        message: "Success",
        description: result.message,
      });
    } catch (e) {
      notification["error"]({
        message: "Gagal Login",
        description: e.message,
      });
    }
  };

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
      dataIndex: "name",
      key: "nama",
    },
    {
      title: "Package Name",
      width: 100,
      dataIndex: "packageName",
      key: "packageName",
    },
    {
      title: "Package Tag",
      width: 100,
      dataIndex: "packageTag",
      key: "packageTag",
    },
    {
      title: "Package Serial",
      width: 100,
      dataIndex: "packageSerial",
      key: "packageSerial",
    },
    {
      title: "Prize",
      width: 100,
      dataIndex: "prize",
      key: "prize",
    },
    {
      title: "Status",
      width: 100,
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Telpon Penerima",
      width: 100,
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Telpon Lainnya",
      width: 100,
      dataIndex: "phoneOther",
      key: "phoneOther",
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
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Catatan",
      width: 100,
      dataIndex: "noted",
      key: "noted",
    },
    {
      title: "Action",
      key: "operation",
      fixed: "right",
      width: 100,
      render: (text, record) =>
        text.status === "created" ? (
          <Space size="middle">
            <Button type="primary" onClick={() => onDelivery(text)}>
              delivery
            </Button>
            <Button type="primary" danger onClick={() => onRejected(text)}>
              rejected
            </Button>
          </Space>
        ) : (
          <h4>Order sudah di proses</h4>
        ),
    },
  ];

  return (
    <Content style={{ margin: "0 16px" }}>
      <h2>Data Klaim</h2>
      <Table
        columns={columns}
        dataSource={data}
        scroll={{ x: 2000, y: 1500 }}
        loading={loading}
      />
    </Content>
  );
};

export default Klaim;
