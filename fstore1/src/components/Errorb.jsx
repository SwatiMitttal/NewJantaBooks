    import React, { Component } from 'react';
    import { View, Text, Button } from 'react-native';
    
    class Errorb extends Component {
      constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
      }
    
      static getDerivedStateFromError(error) {
        return { hasError: true };
      }
    
      componentDidCatch(error, errorInfo) {
       console.error("Caught error:", error, errorInfo);
        this.setState({ error, errorInfo });
      }
    
      resetError = () => {
        this.setState({ hasError: false, error: null, errorInfo: null });
      };
    
      render() {
        if (this.state.hasError) {
          return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontSize: 20, marginBottom: 10 }}>Something went wrong.</Text>
              <Text>{this.state.error && this.state.error.toString()}</Text>
              <Text>{this.state.errorInfo && this.state.errorInfo.componentStack}</Text>
              <Button title="Try again" onPress={this.resetError} />
            </View>
          );
        }
    
        return this.props.children;
      }
    }
    
    export default Errorb