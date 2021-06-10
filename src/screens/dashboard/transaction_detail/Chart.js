import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import {BarChart} from 'react-native-chart-kit';
import styles from './styles';

const Chart = () => {
  return (
    <View>
      <View style={styles.chartWrapper}>
        <Text style={styles.chartTitle}>In This Week</Text>
        <View>
          <View>
            <BarChart
              data={{
                labels: ['Sat', 'Sun', 'Mon', 'Tue', 'May', 'Wed', 'Fri'],
                datasets: [
                  {
                    data: [
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                    ],
                  },
                ],
              }}
              width={Dimensions.get('window').width - 32} // from react-native
              height={220}
              chartConfig={{
                backgroundColor: '#E5E5E5',
                backgroundGradientFrom: '#FFF',
                backgroundGradientTo: '#FFF',
                color: (opacity = 1) => `#6379F4`,
                style: {
                  borderRadius: 16,
                },
              }}
              bezier
              style={{
                paddingRight: 10,
                borderRadius: 16,
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Chart;
