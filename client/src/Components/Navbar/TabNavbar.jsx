import React, { useState } from "react";
import { Tabs, Tab } from "react-bootstrap";
import "../../styles/tabStyle.css";

const TabNavbar = ({ children = [] }) => {
	const [key, setKey] = useState("0");

	return (
		<Tabs activeKey={key} className="d-flex" onSelect={(k) => setKey(k)}>
			{children !== undefined &&
				children.map((child, index) => {
					return (
						<Tab
							eventKey={index}
							title={child.props.tabTitle}
							className="h-100 bg-dark flex-fill rounded"
							tabClassName={key == index ? " bg-dark " + child.props.tabClass : "" + child.props.tabClass}
							key={index}
							disabled={child.props.disabled}
						>
							{child}
						</Tab>
					);
				})}
		</Tabs>
	);
};

export default TabNavbar;
