import { Typography } from "antd";
import { CopyrightOutlined } from "@ant-design/icons";

function AppFooter() {
    return (
        <div className="appFooter">
            <Typography.Link href="htts://www.google.com" target="_blank">Terms & Conditions </Typography.Link>
            <Typography.Link href="htts://www.google.com" target="_blank"><CopyrightOutlined /> Bubba Jaymes</Typography.Link>
            <Typography.Link href="htts://www.google.com" target="_blank">Privacy Policy </Typography.Link>
            <Typography.Link href="tel: +254716641112" target="_blank">Tel: +254 716 641 112 </Typography.Link>
        </div>
    )
}

export default AppFooter;