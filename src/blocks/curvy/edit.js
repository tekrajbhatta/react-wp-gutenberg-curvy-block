/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';

import { Panel, PanelBody, PanelRow, ToggleControl } from '@wordpress/components';

// import { more } from '@wordpress/icons';

import { useState } from 'react';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */

import metadata from './block.json';

export default function Edit() {

	const [ hasFixedBackground, setHasFixedBackground ] = useState( false );

	return (
		<>
			
			<p { ...useBlockProps() }>
				{ __(
					'React Wp Gutenberg Curvy Block – hello from the editor!',
					metadata.textdomain
				) }
			</p>
			<InspectorControls>
				<Panel header={__("Custom Settings")}>
					<PanelBody title={__("Top Curve", metadata.textdomain)} initialOpen={true}>
						<div style={{display: 'flex'}}>
							<ToggleControl 
								label={__("Enable top curve", metadata.textdomain)}
								onChange={ (e) => {
									console.log('New avlaue is1111: ', e);
								} }
								checked={true}
							/>
							<ToggleControl
								__nextHasNoMarginBottom
								label="Fixed Background"
								help={
									hasFixedBackground
										? 'Has fixed background.'
										: 'No fixed background.'
								}
								checked={ hasFixedBackground }
								onChange={ (newValue) => {
									console.log('New avlaue is: ', newValue);
									setHasFixedBackground( newValue );
								} }
							/>
						</div>
					</PanelBody>

					<PanelBody title="My Block Settings1" initialOpen={false}>
						<PanelRow>My Panel Inputs and Labels</PanelRow>
						<PanelRow>My Panel Inputs and Labels</PanelRow>
						<PanelRow>My Panel Inputs and Labels</PanelRow>
					</PanelBody>
				</Panel>

				<Panel header="My Panel1">
					<PanelBody title="My Block Settings" initialOpen={false}>
						<PanelRow>My Panel Inputs and Labels</PanelRow>
						<PanelRow>My Panel Inputs and Labels</PanelRow>
						<PanelRow>My Panel Inputs and Labels</PanelRow>
					</PanelBody>

					<PanelBody title="My Block Settings1" initialOpen={false}>
						<PanelRow>My Panel Inputs and Labels</PanelRow>
						<PanelRow>My Panel Inputs and Labels</PanelRow>
						<PanelRow>My Panel Inputs and Labels</PanelRow>
					</PanelBody>
				</Panel>
			</InspectorControls>
		</>
	);
}
