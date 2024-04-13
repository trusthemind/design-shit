"use client";
import { Button, Card, Form, Input } from "antd";
import s from "./styles.module.scss";

export const Forms = () => {
  const [form] = Form.useForm();
  console.log(form);

  return (
    <div className={s.buttons}>
      <Card
        className={s.card}
        styles={{
          body: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            flexWrap: "wrap",
            backgroundColor: "var(--orange)",
            borderRadius: "1rem",
            width: "100%",
          },
        }}
      >
        <h1 style={{ color: "white", width: "100%", fontSize: 24 }}>Member Login </h1>
        <Form
          form={form}
          style={{ display: "flex", flexDirection: "row", gap: "1rem", height: "50%" }}
        >
          <Form.Item>
            <Input type="text" placeholder="User Name" />
          </Form.Item>
          <Form.Item>
            <Input type="password" placeholder="Password" />
          </Form.Item>
          <Form.Item>
            <Button
              type="default"
              style={{ backgroundColor: "#444 !important", color: "white !important" }}
              size="large"
              htmlType="submit"
            >
              Log me in
            </Button>
          </Form.Item>
        </Form>
      </Card>
      <Card
        className={s.card}
        styles={{
          body: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            flexWrap: "wrap",
            backgroundColor: "var(--blue)",
            borderRadius: "1rem",
            width: "100%",
          },
        }}
      >
        <h1 style={{ color: "white", width: "100%", fontSize: 24 }}>
          Subscribe to our weekly newsletter
        </h1>
        <Form
          form={form}
          style={{ display: "flex", flexDirection: "row", gap: "1rem", height: "50%" }}
        >
          <Form.Item>
            <Input placeholder="Email Address" type="text" />
          </Form.Item>
          <Form.Item>
            <Button
              type="default"
              style={{
                backgroundColor: "var(--blue) !important",
                border: "1px solid #274c77",
                color: "white !important",
              }}
              size="large"
              htmlType="submit"
            >
              Subscribe
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};
