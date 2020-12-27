import React, { Component } from 'react';
import Page404 from '../../routes/Page404/Page404';

export default class ShowDetailErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            hasError: false 
        };
    }

    static getDerivedStateFromError(error) {
        return {hasError: true};
    }

    render() { 
        if (this.state.hasError) {
            return <Page404/>
        }
        return this.props.children;
    }
} 