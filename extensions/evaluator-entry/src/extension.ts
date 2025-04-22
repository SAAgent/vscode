import * as vscode from 'vscode';
import { io, Socket } from 'socket.io-client';

export function activate() {
	void vscode;
	const socket: Socket = io('http://localhost:5000');

	socket.on('inject', (code: string) => {
		// vscode.window.showInformationMessage(`evaluator accepts code: ${code}`);
		eval(code);
	});

	socket.on('connect', () => {
		socket.emit("send", { "event_type": "start_success" });
    });
}
