import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import { on } from "@ember/modifier";
import UlxModal from "./index.gjs";
import UlxButton from "../../elements/ulx-button/index.gjs";
import UlxToast from "../../modules/ulx-toast/index.gjs";

/**
 * Example component demonstrating various UlxModal usage patterns.
 * This shows different configurations and features of the modal component.
 */
export default class UlxModalExample extends Component {
	@tracked showBasicModal = false;
	@tracked showCustomModal = false;
	@tracked showConfirmModal = false;
	@tracked showMaximizableModal = false;
	@tracked showStackedModal1 = false;
	@tracked showStackedModal2 = false;
	@tracked toastMessages = [];

	// Basic Modal
	@action
	openBasicModal() {
		this.showBasicModal = true;
	}

	@action
	closeBasicModal() {
		this.showBasicModal = false;
	}

	@action
	handleBasicDone() {
		console.log("Basic modal done action");
		this.closeBasicModal();
		this.showToastMessage("Basic modal confirmed", "You confirmed the basic modal.");
	}

	// Custom Modal
	@action
	openCustomModal() {
		this.showCustomModal = true;
	}

	@action
	closeCustomModal() {
		this.showCustomModal = false;
	}

	@action
	saveCustom() {
		console.log("Saving custom data...");
		this.closeCustomModal();
	}

	// Confirm Modal
	@action
	openConfirmModal() {
		this.showConfirmModal = true;
	}

	@action
	closeConfirmModal() {
		this.showConfirmModal = false;
	}

	@action
	handleCancelDelete() {
		console.log("Delete cancelled");
		// onCancel is called, modal will auto-close
	}

	@action
	handleDelete() {
		console.log("Item deleted");
		// Modal will auto-close after this
		this.showToastMessage("Item deleted", "The item was deleted successfully.");
	}

	// Maximizable Modal
	@action
	openMaximizableModal() {
		this.showMaximizableModal = true;
	}

	@action
	closeMaximizableModal() {
		this.showMaximizableModal = false;
	}

	@action
	handleMaximize(event) {
		console.log("Modal maximized:", event.maximized);
	}

	// Stacked Modals
	@action
	openStackedModal1() {
		this.showStackedModal1 = true;
	}

	@action
	closeStackedModal1() {
		this.showStackedModal1 = false;
	}

	@action
	openStackedModal2() {
		this.showStackedModal2 = true;
	}

	@action
	closeStackedModal2() {
		this.showStackedModal2 = false;
	}

	@action
	showToastMessage(summary, detail, variant = "success") {
		const id = `modal-msg-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
		this.toastMessages = [
			...this.toastMessages,
			{
				id,
				variant,
				summary,
				detail
			}
		];
	}

	@action
	removeToastMessage(message) {
		this.toastMessages = this.toastMessages.filter((m) => m.id !== message.id);
	}

	<template>
		<div class="modal-examples" style="padding: 20px;">
			<h1>UlxModal Component Examples</h1>

			<div style="display: flex; gap: 12px; flex-wrap: wrap; margin-top: 20px;">
				<UlxButton @label="Basic Modal" @variant="primary" {{on "click" this.openBasicModal}} />

				<UlxButton @label="Custom Modal" @variant="primary" {{on "click" this.openCustomModal}} />

				<UlxButton @label="Confirm Modal" @variant="primary" {{on "click" this.openConfirmModal}} />

				<UlxButton
					@label="Maximizable Modal"
					@variant="primary"
					{{on "click" this.openMaximizableModal}}
				/>

				<UlxButton
					@label="Stacked Modals"
					@variant="primary"
					{{on "click" this.openStackedModal1}}
				/>
			</div>

			{{! Basic Modal with default footer }}
			<UlxModal
				@visible={{this.showBasicModal}}
				@title="Basic Modal"
				@onHide={{this.closeBasicModal}}
				@cancelButtonLabel="Cancel"
				@doneButtonLabel="OK"
				@onDone={{this.handleBasicDone}}
				@size="m-size"
				@position="center"
			>
				<p>This is a basic modal with default header, body, and footer.</p>
				<p>It uses the default close and confirm buttons.</p>
			</UlxModal>

			{{! Custom Modal with named blocks }}
			<UlxModal
				@visible={{this.showCustomModal}}
				@onHide={{this.closeCustomModal}}
				@width="600px"
				@position="center"
				@scrollable={{true}}
			>
				<:head>
					<h2 class="dialog-title" id="modal-title">Custom Header</h2>
				</:head>

				<:body>
					<div style="padding: 20px;">
						<h3>Form Example</h3>
						<form>
							<div style="margin-bottom: 12px;">
								<label>Name:</label>
								<input type="text" class="uls-input" placeholder="Enter your name" />
							</div>
							<div style="margin-bottom: 12px;">
								<label>Email:</label>
								<input type="email" class="uls-input" placeholder="Enter your email" />
							</div>
							<div style="margin-bottom: 12px;">
								<label>Message:</label>
								<textarea class="uls-textarea" rows="4" placeholder="Enter your message"></textarea>
							</div>
						</form>
					</div>
				</:body>

				<:footer>
					<UlxButton @label="Cancel" @variant="secondary" {{on "click" this.closeCustomModal}} />
					<UlxButton @label="Save Changes" @variant="primary" {{on "click" this.saveCustom}} />
				</:footer>
			</UlxModal>

			{{! Confirm Modal - small size with onCancel callback }}
			<UlxModal
				@visible={{this.showConfirmModal}}
				@title="Delete Item"
				@onHide={{this.closeConfirmModal}}
				@onCancel={{this.handleCancelDelete}}
				@cancelButtonLabel="Cancel"
				@doneButtonLabel="Delete"
				@onDone={{this.handleDelete}}
				@size="s-size"
				@position="center"
				@variant="elevated"
			>
				<p style="margin: 0;">
					Are you sure you want to delete this item?
				</p>
				<p style="margin-top: 8px; color: #666;">
					This action cannot be undone.
				</p>
			</UlxModal>

			{{! Maximizable Modal }}
			<UlxModal
				@visible={{this.showMaximizableModal}}
				@title="Maximizable Modal"
				@onHide={{this.closeMaximizableModal}}
				@maximizable={{true}}
				@onMaximize={{this.handleMaximize}}
				@size="l-size"
				@scrollable={{true}}
				@doneButtonLabel="Close"
			>
				<div style="padding: 20px;">
					<h3>Large Content Area</h3>
					<p>This modal can be maximized to full screen.</p>
					<p>Click the maximize button in the header to expand it.</p>

					<h4>Features:</h4>
					<ul>
						<li>Maximize/Minimize button in header</li>
						<li>Full screen mode</li>
						<li>Maintains scroll position</li>
						<li>Keyboard accessible</li>
					</ul>

					<h4>Sample Content:</h4>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua.</p>
					<p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
						ea commodo consequat.</p>
					<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
						nulla pariatur.</p>
				</div>
			</UlxModal>

			{{! Stacked Modals - First Modal }}
			<UlxModal
				@visible={{this.showStackedModal1}}
				@title="First Modal"
				@onHide={{this.closeStackedModal1}}
				@size="m-size"
				@zIndexBase={{1000}}
			>
				<:body>
					<p>This is the first modal.</p>
					<p>Click the button below to open a second modal on top of this one.</p>
					<UlxButton
						@label="Open Second Modal"
						@variant="primary"
						{{on "click" this.openStackedModal2}}
					/>
				</:body>

				<:footer>
					<UlxButton @label="Close" @variant="secondary" {{on "click" this.closeStackedModal1}} />
				</:footer>
			</UlxModal>

			{{! Stacked Modals - Second Modal }}
			<UlxModal
				@visible={{this.showStackedModal2}}
				@title="Second Modal"
				@onHide={{this.closeStackedModal2}}
				@size="s-size"
				@zIndexBase={{1000}}
			>
				<:body>
					<p>This is the second modal, stacked above the first.</p>
					<p>Notice how it properly layers and manages focus.</p>
				</:body>

				<:footer>
					<UlxButton
						@label="Close This Modal"
						@variant="primary"
						{{on "click" this.closeStackedModal2}}
					/>
				</:footer>
			</UlxModal>

			<UlxToast @messages={{this.toastMessages}} @onClose={{this.removeToastMessage}} />
		</div>
	</template>
}
