import { FASTElement, customElement, html, attr, ref, css } from "@microsoft/fast-element";

/**	
 * @tag my-search
 * 
 * @summary This is a simple search component
 * 
 * @attr {string} label - The label associated with the search input
 * 
 * @slot default - content displayed in the search button
 * 
 * @cssprop [--font-size=1rem] - The font size of the search input
 * @cssprop [--padding=0.25rem] - The padding of the search input
 * 
 */
@customElement({
	name: 'my-search',
	template: html<MySearch>`
		<label>
			${x => x.label}
			<input type="search" ${ref('searchInput')} @search="${x => x.searchHandler()}" />
		</label>
		<button @click="${x => x.buttonClickHandler()}">
			<slot>Search</slot>
		</button>
	`,
styles: css<MySearch>`
	:host {
			--font-size: 1rem;
			--padding: 0.25rem;

			font-size: var(--font-size);
			display: block;
	}

	input {
			font-size: var(--font-size);
			padding: var(--padding);
	}

	button {
			cursor: pointer;
			font-size: var(--font-size);
			padding: var(--padding);
	}`
})
export class MySearch extends FASTElement {
	@attr label = 'My search';
	searchInput: HTMLInputElement;

	private searchHandler() {
		this.$emit('find', this.searchInput.value);
	}

	private buttonClickHandler() {
		this.$emit('find', this.searchInput.value);
	}
}