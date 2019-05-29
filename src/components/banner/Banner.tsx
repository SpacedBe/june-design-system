import React from "react";
import styled from "styled-components";
import Color from "../../helpers/color";

const colorHelper = new Color();

const BannerStyled = styled.div<{color: string, density: string}>`
  background-color: ${props => colorHelper.getColor(props.color)};
  color: ${props => colorHelper.getColorContrast(props.color)};
  padding: ${props => {
  	switch(props.density) {
		case 'medium':
			return 'var(--spacing-m)';
		case 'tight':
			return 'var(--spacing-s)';
		default:
			return 'var(--spacing-l)';
	}
  }};
  border-radius: 5px;
  text-align: center;
  
  .controls {
    display: flex;
    justify-content: flex-end;
  }
`;

type Props = & {
	className?: string
	id?: string,
	color?: string,
	density?: 'loose' | 'medium' | 'tight',
}

export class Banner extends React.Component<Props> {
	static defaultProps = {
		color: 'orange',
		density: 'loose',
	};

	render() {
		return (
			<BannerStyled id={this.props.id}
						  className={this.props.className}
						  density={this.props.density || Banner.defaultProps.density}
						  color={this.props.color || Banner.defaultProps.color}>
				{this.props.children}
			</BannerStyled>
		);
	}
}
