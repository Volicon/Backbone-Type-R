import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

/**
 * The partial component
 *
 * @disable-docs
 */
const TopLevelMenu = ({ _body, items }) => (
	<ol>
        { items.map( ( x, idx ) => (
            <li key={idx}>
                {x}
            </li>
        ))}
    </ol>	
);

export default TopLevelMenu;
