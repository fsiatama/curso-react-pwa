import React, { Component } from 'react'

export default class IfOffline extends Component {
    constructor(props) {
        super(props)
        this.state = {
            onLine: navigator ? navigator.onLine : true
        }
    }

    componentDidMount() {
        if (!window) {
            return
        }

        window.addEventListener('online', this.getOnline)
        window.addEventListener('offline', this.getOffline)
    }

    componentWillUnmount() {
        window.removeEventListener('online', this.getOnline)
        window.removeEventListener('offline', this.getOffline)
    }

    getOnline = () => this.setState({ onLine: true })
    getOffline = () => this.setState({ onLine: false })

    render() {
        const { children } = this.props
        const { onLine } = this.state
        if (onLine) {
            return null
        }
        return (
            <span>
                { children }
            </span>
        )
    }
}
