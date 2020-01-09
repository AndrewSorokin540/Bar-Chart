import React from 'react';
import './canvas.css'

class Canvas extends React.Component {

    state = {
        colsSpacing: 10,
        statistics: []
    }

    drawGist( 
        ctx,
        colsCount, 
        relativeColsHeights,
        canvasHeight,
        canvasWidth,
        colWidth,
        colsSpacing,
        colsHeights
        ) {
        // отрисовываем столбцы
        for (let i = 0; i < colsCount; i++) {
            
            // для цветовой схемы "fullColorsCols"
            if (this.props.colorTheme === 'fullColorsCols') {

                let heightLevel = relativeColsHeights[i] / canvasHeight; // определяем высоту колонки относительно канваса

                // высокие колонки красим в красный, средний в желтый, низкие в зеленый 
                if(heightLevel > .67) {
                    ctx.fillStyle = "red";
                }else if (heightLevel > 0.33){
                    ctx.fillStyle = "orange";
                }
                else {
                    ctx.fillStyle = "green";
                }

            // для цветовой схемы "gradient"
            }else if (this.props.colorTheme === 'gradient') {
            
                const gradient = ctx.createLinearGradient(canvasWidth, canvasHeight, canvasWidth, 0);   // градиент "снизу-вверх"
    
                // цвета градиента
                gradient.addColorStop(1, 'red');
                gradient.addColorStop(0.7, 'orange');
                gradient.addColorStop(0.45, 'yellow');
                gradient.addColorStop(0, 'green');

                ctx.fillStyle = gradient;   // устанавливаем заливку градиентом
            }

            
            ctx.fillRect(i*colWidth + colsSpacing/2, canvasHeight, colWidth - colsSpacing , -relativeColsHeights[i]);   // рисуем колонку
            const fontSize = colWidth / 3 + 'px';   // размер шрифта будет зависеть от кол-ва колонок
            ctx.font = `${fontSize} Arial`;
            ctx.fillStyle = "#fff";     // ставим белый цвет заливки, чтобы подписать колонки
            ctx.lineWidth = colWidth / 20; // ширина обводки
            
            // подписываем колонки (по центру колонки снизу)
            ctx.strokeText(colsHeights[i], colWidth * i + (colWidth * .5) - ctx.measureText(colsHeights[i]).width * .5, canvasHeight - 5);   
            ctx.fillText(colsHeights[i], colWidth * i + (colWidth * .5) - ctx.measureText(colsHeights[i]).width * .5, canvasHeight - 5);
        }
    }

    componentDidMount() {
        
        // функция чтобы посчитать количество столбцов
        const size = function(obj) {
            var size = 0, key;
            for (key in obj) {
                if (obj.hasOwnProperty(key)) size++;
            }
            return size;
        };
        
        const colsCount = size(this.props.statistics);          // количество столбцов
        const colWidth = this.props.width / colsCount;          // ширина колонки
        const colsHeights = this.props.statistics;              // массив высот всех колонок
        const canvasWidth = this.refs.canvas.width;             // ширина канваса
        const canvasHeight = this.refs.canvas.height;           // высота канваса
        const colsSpacing = this.props.colsSpacing;             // промежутки между колонками


        const ctx = this.refs.canvas.getContext('2d');


        // ищем максимальное значение (это будет самый высокий столбец)
        const maxColHeight = Math.max( ...colsHeights );

        // устанавливаем "единицу высоты"
        const heightUnit = canvasHeight/maxColHeight;
        
        // создаем массив с относительными высотами столбцов
        const relativeColsHeights = colsHeights.map(colsHeight => colsHeight * heightUnit);

        this.drawGist(ctx, colsCount, relativeColsHeights, canvasHeight, canvasWidth, colWidth, 
            colsSpacing, colsHeights);
    }

    componentDidUpdate() {
        // функция чтобы посчитать количество столбцов
        const size = function(obj) {
            var size = 0, key;
            for (key in obj) {
                if (obj.hasOwnProperty(key)) size++;
            }
            return size;
        };
        
        const colsCount = size(this.state.statistics);          // количество столбцов
        const colWidth = this.props.width / colsCount;          // ширина колонки
        const colsHeights = this.state.statistics;              // массив высот всех колонок
        const canvasWidth = this.refs.canvas.width;             // ширина канваса
        const canvasHeight = this.refs.canvas.height;           // высота канваса
        const colsSpacing = this.state.colsSpacing;             // промежутки между колонками


        const ctx = this.refs.canvas.getContext('2d');

        ctx.clearRect(0, 0, canvasWidth, canvasHeight);


        // ищем максимальное значение (это будет самый высокий столбец)
        const maxColHeight = Math.max( ...colsHeights );

        // устанавливаем "единицу высоты"
        const heightUnit = canvasHeight/maxColHeight;
        
        // создаем массив с относительными высотами столбцов
        const relativeColsHeights = colsHeights.map(colsHeight => colsHeight * heightUnit);

        this.drawGist(ctx, colsCount, relativeColsHeights, canvasHeight, canvasWidth, colWidth, 
            colsSpacing, colsHeights);
    }

    handleChange = (event) => {
        this.setState({statistics: event.target.value.split(',')});
    }

    render() {
        return (
            <div className='canvas-container'>
                <canvas className="chart" ref="canvas" width={this.props.width} height={this.props.height}/>
                <input type="text" value={this.state.statistics} onChange={this.handleChange} placeholder='Введите числа через запятую'/>
            </div>
        );
    }
}

export default Canvas;