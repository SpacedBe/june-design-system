import React from "react";
import styled from "styled-components";
import Color from "../../helpers/color";

const colorHelper = new Color();

const BannerStyled = styled.div<{color: string}>`
  background-color: ${props => colorHelper.getColor(props.color)};
  color: ${props => colorHelper.getColorContrast(props.color)};
  padding: var(--spacing-l);
  border-radius: 5px;
  text-align: center;
  
  .controls {
    display: flex;
    justify-content: flex-end;
  }
`;

type Props = & {
	class?: string
	id?: string,
	color?: string,
}

export class Banner extends React.Component<Props> {
	static defaultProps = {
		color: 'orange',
	};

	render() {
		return (
			<BannerStyled id={this.props.id} className={this.props.class} color={this.props.color}>
				{this.props.children}
			</BannerStyled>
		);
	}
}
