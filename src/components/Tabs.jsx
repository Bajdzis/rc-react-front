/**
 * @author Michał Żaloudik <ponury.kostek@gmail.com>
 */
"use strict";
import React, {Component} from "react";

class Tabs extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeTab: 0
		};
		this.activeTabs = this.activeTabs.bind(this);
	}

	activeTabs(index) {
		this.setState({ activeTab: index });
		
	}

	render() {
		const Tag = this.props.tagComponent;
		const TabsHeader = this.props.headers;


		return (<div> <Tag name="h3" className="pinfo-tabs"> 
		
			{TabsHeader.map((name, index) => {
				return index === this.state.activeTab ? <span key={index} className="active thumbsTitle" onClick={() => { this.activeTabs(index)}}> {name} 
				</span> : <span key={index} className="thumbsTitle" onClick={() => { this.activeTabs(index)}}> {name} </span>;
			})}

		
		</Tag>
		
			<Tag name="div">

				{this.props.contents.map((content, index) => {
					return index === this.state.activeTab && <div key={index} className="thumbsContent"> { content } </div>;
				})}


			</Tag>
		
		
		</div>)
	}
}

Tabs.defaultProps = {
};

export default Tabs;