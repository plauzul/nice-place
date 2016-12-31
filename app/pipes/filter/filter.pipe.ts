import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'filter',
	pure: false
})

export class FilterPipe implements PipeTransform {

	transform(array: any[], filter: any, object: any) {
		const type = typeof filter;

		if (!array) {
			return array;
		}

		if (type === 'string') {
			if (this.isNumber(filter)) {
				return array.filter(this.filterDefault(filter));
			}

			return array.filter(this.filterByString(filter, object));
		}

		return array.filter(this.filterDefault(filter));
	}

	private filterByString(filter, object) {
		filter = filter.toLowerCase();
		return value => {
			return !filter || value[object].toLowerCase().indexOf(filter) !== -1;
		}
	}

	private filterDefault(filter) {
		return value => {
			return !filter || filter == value;
		}
	}

	private isNumber(value) {
		return !isNaN(parseInt(value, 10)) && isFinite(value);
	}
}