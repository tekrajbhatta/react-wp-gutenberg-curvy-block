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

import { Curve } from './components/curve.js';
 
export default function Edit(props) {

	console.log("Props values is: ", props);

	const {className, ...blockProps} = useBlockProps();

	return (
		<>
			<section className={`${className} alignfull`} {...blockProps}>
			{props.attributes.enableTopCurve &&
				<Curve />
			}
			</section>
			<InspectorControls>
				<Panel header={__("Custom Settings")}>
					<PanelBody title={__("Top Curve", metadata.textdomain)} initialOpen={true}>
						<div style={{display: 'flex'}}>
							<ToggleControl 
								label={__("Enable top curve", metadata.textdomain)}
								onChange={ (isChecked) => {
									props.setAttributes({
										enableTopCurve: isChecked
									})
								} }
								checked={props.attributes.enableTopCurve}
							/>
						</div>
					</PanelBody>
				</Panel>
			</InspectorControls>
		</>
	);
}
